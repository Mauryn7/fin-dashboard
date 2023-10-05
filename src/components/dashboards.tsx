import Loans from "./Loans"
import Reports from "./Reports"
import TopCards from "./TopCards"
import Transactions from "./Transactions"

const Dashboard = () => {
    return (

        <>
            <TopCards />
            <div className='p-4 grid lg:grid-cols-3 md:grid-cols-1  sm:grid-cols-1  gap-4'>
                <Loans />
                <Reports />
                <Transactions />
            </div>

        </>
    )
}
export default Dashboard