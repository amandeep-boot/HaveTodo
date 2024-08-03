function Navbar(){
    return(
        <header className='App-header container pt-3'>
        <div className=' pt-4 fw-bolder fs-4 d-flex align-items-center justify-content-between fixed-top bg-black'>
          <div className='px-5 mx-3 mt-3'>
            <span className='wheat '>HAVE</span>
            <span className='text-danger'>TODO</span>
          </div>
          <div className='btn bg-wheat mt-3 mx-5'>
            <i className='fa fa-sign-out '></i>
          </div>
        </div>
        <div style={{ height: '10vh' }}> </div>
      </header>
    );

}

export default Navbar;