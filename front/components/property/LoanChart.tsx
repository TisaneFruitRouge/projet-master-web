
interface LoanChartProps {
    totalAmount: number;
    monthly_payments: number;
    rate: number;
    duration: number;
}

export default function LoanChart({totalAmount, monthly_payments, rate, duration}: LoanChartProps) {
    return (
        <div className="w-full rounded-sm border border-solid border-black/30">

        </div> 
    );
}