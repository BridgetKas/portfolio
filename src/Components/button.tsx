import { ReactNode } from "react"

type buttonProps ={
    title:string,
    textColor:string,
    bgColor:string,
    borderColor:string,
    click:React.MouseEventHandler<HTMLButtonElement> | undefined,
    icon?:ReactNode
}


function Button(props:buttonProps) {
  const {title,textColor,bgColor,borderColor,click} = props
  return (
    
    <button className= "border-2 border-transparent outline-none bg-transparent rounded-[30px] text-lg font-bold px-6 py-3"
    style = {{
      color:textColor ? textColor:'#fff',
      backgroundColor: bgColor ? bgColor:'#2f2f2f',
      borderColor:borderColor ? borderColor: '#2f2f2f',
      fontWeight:'450',
      marginTop:'10px'
    }}
   onClick={click}
    >
      {title}
    </button>
  )
}

export default Button