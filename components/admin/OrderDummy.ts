
type OrderDeliveryProps = {
    product: string; //상품명
    salesCompany: string; //판매 회사(제조사)
    sales_type: string; //판매종류(대분류)
    order_number: number; // 주문번호
    order_date: string; //주문일자

    cancel_state: number; //취소처리상태

    process_state: number; //처리상태
    order_count: number; // 주문갯수
    order_amount: number; //주문금액
    invoice_number: string; //송장번호
    cancel_reason?: string; //사유
}

type DummyData = {
    id: number;
    email: string;
    name: string;
    registrationNumber: string;
    contactNumber: string;
    contactName: string;
    address: string;
}

// type DummyCancelDataProps = {
//     productName: string;
//     company: string;
//     sales_type: string;
//     ro
// }

export const dummy: OrderDeliveryProps[] = [
    {
        product: '상품1',
        salesCompany: '판매회사 1',
        sales_type: '객실용품',
        order_number: 124123123,
        order_date: '230513',
        cancel_state: 0,
        process_state: 1,
        order_count: 1000,
        order_amount: 1000000,
        invoice_number: "CJ대한통운(123456)"
    },
    {
        product: '상품2',
        salesCompany: '판매회사 2',
        sales_type: '객실용품',
        order_number: 124123123,
        order_date: '230513',
        cancel_state: 0,
        process_state: 2,
        order_count: 1000,
        order_amount: 4000,
        invoice_number: "CJ대한통운(123456)"
    },
    {
        product: '상품3',
        salesCompany: '판매회사 2',
        sales_type: '객실용품',
        order_number: 124123123,
        order_date: '230513',
        cancel_state: 0,
        process_state: 3,
        order_count: 1000,
        order_amount: 30000,
        invoice_number: "CJ대한통운(123456)"
    }
];

export const dummyData: DummyData[] = [
    {
        id: 1,
        email: 'test1@example.com',
        name: 'Company A',
        registrationNumber: '123-45-67890',
        contactNumber: '02-123-4567',
        contactName: 'John Doe',
        address: 'Seoul, Korea',
    },
    {
        id: 2,
        email: 'test2@example.com',
        name: 'Company B',
        registrationNumber: '234-56-78901',
        contactNumber: '02-234-5678',
        contactName: 'Jane Doe',
        address: 'Busan, Korea',
    },
    // ... 추가적인 데이터
];

// export const cancelDummy: DummyCancelDataProps[] = [
//     {
//         productname: "상품명1",
//     }
// ]