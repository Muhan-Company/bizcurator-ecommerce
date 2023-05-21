import { atom, useRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Recoil 상태(atom) 정의
const adminIdState = atom({
    key: 'adminIdState',
    default: '',
});

const adminPwdState = atom({
    key: 'adminPwdState',
    default: '',
});


export default function LoginForm() {

    const [adminId, setAdminId] = useRecoilState(adminIdState);
    const [adminPwd, setAdminPwd] = useRecoilState(adminPwdState);

    const handleAdminIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdminId(e.target.value);
    }

    const handleAdminPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdminPwd(e.target.value);
    }

    //
    const queryClint = useQueryClient();

    const loginMutation = useMutation(
        async () => {
            const response = await axios.post('http://43.201.195.195:8080/api/admins/login', {
                id: adminId,
                password: adminPwd,
            })
            return response.data;
        },
        {
            onSuccess: (data) => {
                const { refreshToken } = data;
                axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
                console.log(refreshToken);
            }
        }
    )

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 로그인 처리 로직을 여기에 추가하세요
        console.log('Username:', adminId);
        console.log('Password:', adminPwd);
        loginMutation.mutate();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap p-10 w-[450px]  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className="w-[450px] inline-block text-center mb-5 font-bold">로그인</h3>
                <div className="mb-4 w-full">
                    <label htmlFor="adminId" className="block text-gray-700 text-sm font-bold mb-2">
                        아이디
                    </label>
                    <input
                        id="adminId"
                        type="text"
                        value={adminId}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="이름을 입력하세요"
                        onChange={handleAdminIdChange}
                    />
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="adminPwd" className="block text-gray-700 text-sm font-bold mb-2">
                        비밀번호
                    </label>
                    <input
                        id="adminPwd"
                        type="password"
                        value={adminPwd}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="이름을 입력하세요"
                        onChange={handleAdminPwdChange}
                    />
                </div>
                <button
                    type='submit'
                    className="mt-5 bg-[#16133A] text-white w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                    로그인
                </button>
            </div>
        </form>
    )
}