import React , {useEffect, useState} from 'react'

export default function UseEffect() {
    const [count,setCount]=useState<number>(0);
    const [name,setName]=useState<string>("minh thu")
    useEffect(()=>{
        console.log("useeffect đc gọi");
        
    },[name,count])

    
    const handleClick=()=>{
        setCount(count+1)
    }
    // đoạn xử lý logic

    
  return (
    <div>UseEffect
        {/* UseEffect : là 1 hook
        useEffect là 1 cái hàm
        sinh ra để làm j ?
        -giải quyết các vấn đề sile effect. (tác dụng phụ bên cạch tác vụ chính);
        Cú Pháp
        3 cú pháp useEffect
        useEffect tương tự componentDidMount
        1.nhận vào 1 tham số là callback function (arrow function)
            +khi component đc mount vào Dom thì useEffect đc gọi
            +khi mỗi lần component re-render thì useEffect đc gọi
        2.nhận vào 1 tham số là callback function (arrow function) và tham số thứ 2 là 
        một mảng rỗng []
            +khi component đc mount vào Dom thì useeffect đc gọi
            +khi mỗi lần component re-render thì useEffect ko đc gọi
        3.nhận vào 1 tham số là callback function (arrow function) và tham số thứ 2 là một mảng
        [dependency] (sự phụ thuộc)
            +useeffect được gọi khi component được mount vào Dom
            +khi dependency thay đổi thì useEffect đc gọi
        cách dùng như thế nào ?
        
        */}
        <p>giá trị biến count : {count}</p>
        <button onClick={handleClick} >Click</button>
    </div>
  )
}
