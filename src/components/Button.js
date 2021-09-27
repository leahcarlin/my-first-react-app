export default function Button(){

    const clickBtn = () => {
        console.log("clicked")
      }

    return (
        <div>
            <button onClick={clickBtn}>Click Me</button>
        </div>
    )
}