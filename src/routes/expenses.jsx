import { Link, Outlet } from "react-router-dom";
import { getExpenses } from "../expenseData";

export default function Expenses() {

  let expenses = getExpenses();
  return (
    <div style={{ display: "flex" }}>
      <nav>
        {expenses.map((expenses) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/expenses/${expenses.number}`}
            key={expenses.number}
          >
            {expenses.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
