import { IFormInputs } from '@/components/request/PurchaseForm';

interface MyRequests extends IFormInputs {
  category: number;
  document_type: string;
  id: number;
  image_directory: string;
  manager_call: string;
  manager_name: string;
  state_type: string;
}

export default function Asdf() {
  return <div>Asdf</div>;
}
