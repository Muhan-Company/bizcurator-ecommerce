import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import SignupForm from '@/components/users/SignupForm';

export default function SignupPage() {
  return (
    <Layout>
      <SignupForm />
      <NavBar />
    </Layout>
  );
}
