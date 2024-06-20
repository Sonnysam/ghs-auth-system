
type UserCard ={
    name: string;
    userId: string;
    department: string;
    payDay: string;
}

export default function UserCard({name, userId, department,payDay}:UserCard){
    return(
        <div className="flex flex-col p-4 text-xl font-semibold from-neutral-600 w-[700px] h-[600px] rounded-[15px] bg-slate-300">
           <div>Name: {name}</div>
           <div>ID: {userId}</div>
           <div>Department: {department}</div>
           <div>Next Pay Day:{payDay}</div>
           <div>Salary: GHS 4300.00</div>
        </div>
    )
}