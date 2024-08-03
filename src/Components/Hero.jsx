const Hero = ({items}) => {
     const done = items.filter(item=>item.completed===true).length;
     
    return (
        <main className='App-main container-fluid'>
        <div className='d-flex  justify-content-around align-items-center  mx-auto border rounded-5 px-3 py-5' style={{marginTop:'50px'}}>
          <div>
            <h1 className='wheat mb-0 pb-0'>Todo Done</h1>
            <div className=' wheat fs-4 fw-light mt-0 pt-0'>keep it up</div>
          </div>
          <div className='bg-danger text-black d-flex justify-content-center align-items-center py-5 px-5 rounded-circle'>
            <h1>{done}/{items.length}</h1>
          </div>
          
        </div>
      </main>
    );
}

export default Hero;