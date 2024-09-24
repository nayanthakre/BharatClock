const ClockCurrentTime = () => {
    let time= new Date();
    return ( <p>this is the currnt time:{time.toLocaleDateString()}-{" "}
    {time.toLocaleTimeString()}
</p> );
}
 
export default ClockCurrentTime;