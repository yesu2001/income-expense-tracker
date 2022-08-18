import {useState,useEffect} from 'react';
import './FormInput.css'
function FormInput() {
	const [lists,setLists] = useState([])
	const [expenseInput, setExpenseInput] = useState('');
	const [amount,setAmount] = useState('');
	const [type,setType] = useState('expense');
	var [totalExpense,setTotalExpense] = useState(0);
	var [totalIncome,setTotalIncome] = useState(0);

	// add Expense or income
	const handleSubmit = (e) => {
		e.preventDefault();
		var newExpense = {
			desc: expenseInput.toUpperCase(),
			expense: type,
			amt: amount,
		}

		if(newExpense.expense === 'expense') {
			setTotalExpense(totalExpense+parseInt(newExpense.amt))
		}else {
			setTotalIncome(totalIncome+parseInt(newExpense.amt))
		} 

		setLists([...lists, newExpense])
		setExpenseInput('')
		setAmount('')

	}

	return (
		<div className="form">
			<form>
				<input type='text' value={expenseInput} onChange={e=>setExpenseInput(e.target.value)} placeholder='Enter an Expense...'/>
				<div>
					<div>
						<input type='radio' name='type' value='expense' checked={type === 'expense'} onChange={e=>setType(e.target.value)}/>Expense
					</div>
					<div> 
						<input type='radio' name='type' value='income' checked={type === 'income'} onChange={e=>setType(e.target.value)}/>Income
					</div>
				</div>
				<input type='text' value={amount} onChange={e=>setAmount(e.target.value)} placeholder='Amount...'/>
				<input type='submit' id='submit' onClick={handleSubmit} value='submit'/>
			</form>
			<div className='total'>
				<p>Expenses : {totalExpense}</p>
				<p>Incomes : {totalIncome}</p>
			</div>
			{
				lists.map((item,index) => <div key={item.desc} style={{ backgroundColor: item.expense==='expense'? 'rgba(240, 78, 72,0.1)' : 'rgba(163, 245, 154,0.1)'}} className='list'>
					<li >{item.desc} </li> <span style={{ color: item.expense==='expense'? 'red' : 'green'}}>{item.expense==='expense'? '-':''} ₹ {item.amt}</span></div>)
			}
		</div>
	)
	
}

export default FormInput;