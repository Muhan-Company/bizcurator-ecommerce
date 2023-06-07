import NavBar from '@/components/footer/NavBar';
import Header2 from '@/components/header/Header2';
import Layout from '@/components/layout/Layout';
import SignupForm from '@/components/users/SignupForm';

export default function SignupPage() {
  return (
    <Layout>
      <Header2 text="회원가입" />
      <SignupForm />
      <NavBar />
    </Layout>
  );
}
