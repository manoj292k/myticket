function Header() {
    return (
        <>
            <div className="container max-w-full bg-rose-500 align-middle header">
                <div className="flex justify-between">
                    <a className='p-2 text-white' href="#">mjtravelsinfo@mjt.com</a>
                    <h1 className="text-5xl text-white p-2">MJ Travels</h1>
                    <a className='p-2  text-white' href="#">9998877665</a>
                </div>
            </div>
            <div className="container max-w-full flex bg-white align-middle justify-center border-2 navbar">
                <li className="list-none p-3"><a href="/myticket">Home</a></li>
                <li className="list-none p-3"><a href="/">My Booking</a></li>
                <li className="list-none p-3"><a href="/">Cancel & Refund</a></li>
                <li className="list-none p-3"><a href="/">Help</a></li>
                <li className="list-none p-3"><a href="/">Contact us</a></li>
            </div>
        </>
    )
}
export default Header;