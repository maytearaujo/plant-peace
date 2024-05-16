import { ChangeEvent, FormEvent, useState } from 'react'

import Button from "../components/Button"
import { Input, TextArea } from "../components/Input"

import * as Yup from 'yup';

interface FormData {
  plantName: string;
  plantSubtitle: string;
  plantType: string;
  price: number;
  discountPercentage: number;
  label: string;
  features: string;
  description: string;
}

interface ValidationErrors {
  plantName?: string;
  plantSubtitle?: string;
  plantType?: string;
  price?: string;
  discountPercentage?: string;
  label?: string;
  features?: string;
  description?: string;
}

const validationSchema = Yup.object().shape({
  plantName: Yup.string().required('O nome é obrigatório').min(2, 'O nome deve ter pelo menos 2 caracteres'),
  plantSubtitle: Yup.string().required('O subtítulo é obrigatório').min(2, 'O subtítulo deve ter pelo menos 2 caracteres'),
  plantType: Yup.string().required('O tipo é obrigatório').min(2, 'O tipo deve ter pelo menos 2 caracteres'),
  price: Yup.number().required('O preço é obrigatório').min(0, 'O preço deve ser positivo'),
  discountPercentage: Yup.number().required('O percentual de desconto é obrigatório').min(0, 'O percentual de desconto deve ser positivo').max(100, 'O percentual de desconto deve ser no máximo 100'),
  label: Yup.string().required('O rótulo é obrigatório').min(2, 'O rótulo deve ter pelo menos 2 caracteres'),
  features: Yup.string().required('As características são obrigatórias').min(2, 'As características devem ter pelo menos 2 caracteres'),
  description: Yup.string().required('A descrição é obrigatória').min(2, 'A descrição deve ter pelo menos 2 caracteres'),
});

function PlantRegistration() {
  const [formData, setFormData] = useState<FormData>({
    plantName: '',
    plantSubtitle: '',
    plantType: '',
    price: 0,
    discountPercentage: 0,
    label: '',
    features: '',
    description: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log('Formulário enviado com sucesso:', formData);
    } catch (err: any) {
      const validationErrors: ValidationErrors = {};
      err.inner.forEach((error: Yup.ValidationError) => {
        validationErrors[error.path as keyof FormData] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <main className="h-screen w-screen">

      <form className="ml-[50px] p-[50px] w-[572px] flex flex-col gap-9" onSubmit={handleSubmit}>
        <div className="h-14 flex items-center border-b-[1px] border-[#AFB2AA]">
          <h1 className="mb-2 font-inter font-semibold text-2xl text-[#354733]">Plant Registration</h1>
        </div>

        <div className="flex flex-col gap-6">
          <Input id="plantName" name="plantName" placeholder="Echinocereus Cactus" type="inputText" label="Plant name" value={formData.plantName} onChange={handleChange} />
          <Input id="plantSubtitle" name="plantSubtitle" placeholder="A majestic addition to your plant collection" type="inputText" label="Plant subtitle" value={formData.plantSubtitle} onChange={handleChange} />
        </div>

        <div className="flex gap-[18px]">
          <Input id="price" name="price" placeholder="$139.99" type="inputNumber" label="Price" value={formData.price} onChange={handleChange} />
          <Input id="discountPercentage" name="discountPercentage" placeholder="20%" type="inputNumber" label="Discount percentage" value={formData.discountPercentage} onChange={handleChange} max={100} />
        </div>

        <div className="flex flex-col gap-4">
          <TextArea id="features" name="features" placeholder="Species: Echinocereus..." label="Features" value={formData.features} onChange={handleChange} />
          <TextArea id="description" name="description" placeholder="Ladyfinger cactus..." label="Description" value={formData.description} onChange={handleChange} />
        </div>

        <Button border margin>
          <span className="font-inter font-bold">Register</span>
        </Button>
      </form>
    </main>
  );
}

export default PlantRegistration;
