import { ChangeEvent, FormEvent, FocusEvent, useState } from 'react';
import Button from "../components/Button";
import { Input, TextArea } from "../components/Input";
import * as Yup from 'yup';
import axios from 'axios';
import { v4 } from 'uuid';

import { Toaster, toast } from 'react-hot-toast';
interface FormData {
  id: string;
  plantName: string;
  plantSubtitle: string;
  plantType: string;
  price: number | string;
  discountPercentage: number | string;
  label: string;
  labelArray: { plantType: string; label: string }[];
  features: string;
  description: string;
  imgUrl: string;
}
interface ValidationErrors {
  id?: string;
  plantName?: string;
  plantSubtitle?: string;
  plantType?: string;
  price?: number | string;
  discountPercentage?: string;
  label?: string;
  labelArray?: string;
  features?: string;
  description?: string;
  imgUrl?: string;
}

const validationSchema = Yup.object().shape({
  id: Yup.string().required('O id é obrigatório'),
  plantName: Yup.string().required('O nome é obrigatório').min(2, 'O nome deve ter pelo menos 2 caracteres'),
  plantSubtitle: Yup.string().required('O subtítulo é obrigatório').min(2, 'O subtítulo deve ter pelo menos 2 caracteres'),
  plantType: Yup.string().required('O tipo é obrigatório').min(2, 'O tipo deve ter pelo menos 2 caracteres'),
  price: Yup.string().required('O preço é obrigatório').min(3, 'O preço deve ser positivo'),
  discountPercentage: Yup.string().required('O percentual de desconto é obrigatório').min(2, 'O percentual de desconto deve ser positivo').max(100, 'O percentual de desconto deve ser no máximo 100'),
  label: Yup.string().required('O rótulo é obrigatório').min(2, 'O rótulo deve ter pelo menos 2 caracteres'),
  features: Yup.string().required('As características são obrigatórias').min(2, 'As características devem ter pelo menos 2 caracteres'),
  description: Yup.string().required('A descrição é obrigatória').min(2, 'A descrição deve ter pelo menos 2 caracteres'),
  imgUrl: Yup.string().required('A URL da imagem é obrigatória'),
});

function PlantRegistration() {
  const [formData, setFormData] = useState<FormData>({
    id: v4(),
    plantName: '',
    plantSubtitle: '',
    plantType: '',
    price: '',
    discountPercentage: '',
    label: '',
    labelArray: [],
    features: '',
    description: '',
    imgUrl: '../src/assets/home/3this/photo1.png',
  });

  const [errors, setErrors] = useState<ValidationErrors>({
    id: '',
    plantName: '',
    plantSubtitle: '',
    plantType: '',
    price: '',
    discountPercentage: '',
    label: '',
    labelArray: '',
    features: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'discountPercentage' ? value.slice(0, 2) : value,
    });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const suffix = e.target.name === 'discountPercentage' ? '%' : '';

    if (!value.endsWith(suffix)) {
      setFormData({
        ...formData,
        [name]: value + suffix,
      });
    }
  };

  const handleClick = (radioValue: string) => {
    // Crie um novo objeto de rótulo
    const newLabel = { plantType: formData.plantType, label: radioValue };
    // Atualize o estado adicionando o novo objeto ao array existente
    setFormData((prevFormData) => ({
      ...prevFormData,
      label: radioValue,
      labelArray: [newLabel],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const response = await axios.post('http://localhost:3000/plants', formData);

      toast.success('Plant registered successfully!');

      setFormData(
        {
          id: v4(),
          plantName: '',
          plantSubtitle: '',
          plantType: '',
          price: '',
          discountPercentage: '',
          label: '',
          labelArray: [],
          features: '',
          description: '',
          imgUrl: '../src/assets/home/3this/photo1.png',
        }
      );

    } catch (err: any) {
      const validationErrors: ValidationErrors = {};
      err.inner.forEach((error: Yup.ValidationError) => {
        validationErrors[error.path as keyof FormData] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <main className="h-full w-screen flex justify-between">
      <Toaster
        position='top-right'
      />

      <form className="ml-[50px] px-[50px] pt-[50px] pb-[122px] w-[572px] flex flex-col gap-9" onSubmit={handleSubmit}>
        <div className="h-14 flex items-center border-b-[1px] border-[#AFB2AA]">
          <h1 className="mb-2 font-inter font-semibold text-2xl text-[#354733]">Plant Registration</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <Input id="plantName" name="plantName" placeholder="Echinocereus Cactus" type="inputText" label="Plant name" error={errors.plantName ? true : false} value={formData.plantName} onChange={handleChange} />
            {errors.plantName && <label className="text-red-500">{errors.plantName}</label>}
          </div>

          <div>
            <Input id="plantSubtitle" name="plantSubtitle" placeholder="A majestic addition to your plant collection" type="inputText" label="Plant subtitle" error={errors.plantSubtitle ? true : false} value={formData.plantSubtitle} onChange={handleChange} />
            {errors.plantSubtitle && <label className="text-red-500">{errors.plantSubtitle}</label>}
          </div>
        </div>

        <div>
          <Input id="plantType" name="plantType" placeholder="Cactus" type="inputText" label="Plant type" error={errors.plantType ? true : false} value={formData.plantType} onChange={handleChange} />
          {errors.plantType && <label className="text-red-500">{errors.plantType}</label>}
        </div>

        <div className="flex gap-[18px]">
          <div>
            <Input id="price" name="price" placeholder="$139.99" type="inputNumber" maskType='currency' label="Price" error={errors.price ? true : false} value={formData.price} onChange={handleChange} />
            {errors.price && <label className="text-red-500">{errors.price}</label>}
          </div>

          <div>
            <Input id="discountPercentage" name="discountPercentage" placeholder="20%" type="inputNumber" maskType='percentage' label="Discount percentage" error={errors.discountPercentage ? true : false} value={formData.discountPercentage} onChange={handleChange} onBlur={handleBlur} max={100} />
            {errors.discountPercentage && <label className="text-red-500">{errors.discountPercentage}</label>}
          </div>
        </div>

        <div>
          <Input id='indoorLabel' type='radioButton' label='Label' placeholder='' handleChange={handleClick} />
          {errors.label && <label className="text-red-500">{errors.label}</label>}
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <TextArea id="features" name="features" placeholder="Species: Echinocereus..." label="Features" error={errors.features ? true : false} value={formData.features} onChange={handleChange} />
            {errors.features && <label className="text-red-500">{errors.features}</label>}
          </div>

          <div>
            <TextArea id="description" name="description" placeholder="Ladyfinger cactus..." label="Description" error={errors.description ? true : false} value={formData.description} onChange={handleChange} />
            {errors.description && <label className="text-red-500">{errors.description}</label>}
          </div>
        </div>

        <Button type={'submit'} border margin width height>
          <span className="font-inter font-bold">Register</span>
        </Button>
      </form>

      <img src="../../src/assets/home/1discover/image.png" className="mix-blend-luminosity" />
    </main>
  );
}

export default PlantRegistration;

