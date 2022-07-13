import ExpenseApp from "./components/expense-app/ExpenseApp";
import Header from "./components/layouts/Header";

const App = () => {
  return ( 
    <div className="flex flex-col items-center w-full h-full min-h-screen bg-slate-100">
      <Header />
      <ExpenseApp />
    </div>
   );
}
 
export default App;