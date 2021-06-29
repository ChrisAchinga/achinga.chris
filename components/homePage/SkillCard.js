const SkillCard = () => {
  return (
    <div className='col-lg-6 col-xl-4 mt-3'>
      <div className='card mb-5 mb-xl-0'>
        <div className='card-body p-5'>
          <div className='small text-uppercase fw-bold text-muted'>Free</div>
          <div className='mb-3'>
            <span className='display-4 fw-bold'>$0</span>
            <span className='text-muted'>/ mo.</span>
          </div>
          <ul className='list-unstyled mb-4'>
            <li className='mb-2'>
              <i className='bi bi-check text-primary'></i>
              <strong>1 users</strong>
            </li>
            <li className='mb-2'>
              <i className='bi bi-check text-primary'></i>
              5GB storage
            </li>
            <li className='mb-2'>
              <i className='bi bi-check text-primary'></i>
              Unlimited public projects
            </li>
            <li className='mb-2'>
              <i className='bi bi-check text-primary'></i>
              Community access
            </li>
            <li className='mb-2 text-muted'>
              <i className='bi bi-x'></i>
              Unlimited private projects
            </li>
            <li className='mb-2 text-muted'>
              <i className='bi bi-x'></i>
              Dedicated support
            </li>
            <li className='mb-2 text-muted'>
              <i className='bi bi-x'></i>
              Free linked domain
            </li>
            <li className='text-muted'>
              <i className='bi bi-x'></i>
              Monthly status reports
            </li>
          </ul>
          <div className='d-grid'>
            <a className='btn btn-outline-primary' href='#!'>
              Choose plan
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
