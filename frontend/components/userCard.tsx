
type UserCard ={
    name: string;
    userId: string;
    department: string;
    payDay: string;
}
const div1class = "flex bg-slate-50 rounded-[10px] w-[300px] h-[50px] items-center"
const dayclass =" bg-white rounded-[10px] w-[300px] h-[100px] items-center"

export default function UserCard({name, userId, department,payDay}:UserCard){
    return(
        <div className="flex space-y-3 flex-col p-4 text-xl font-semibold from-neutral-600 w-[700px] h-[600px] rounded-[15px] bg-slate-300">
           <div className={`${dayclass}`} ><p className={`${div1class}`}>Name: </p>{name}</div>
           <div className={`${dayclass}`}><p className={`${div1class}`}>ID:</p> {userId}</div>
           <div className={`${dayclass}`}><p className={`${div1class}`}>Department:</p> {department}</div>
           <div className={`${dayclass}`}><p className={`${div1class}`}>Next Pay Day:</p>{payDay}</div>
           <div className={`${dayclass}`}><p className={`${div1class}`}>Salary:</p> GHS 4300.00</div>
        </div>
    )
}