export default function HorizontalTabs(){

	function clickTab(e){
		const tabItems = document.querySelectorAll('.horizontal-tabs .tab-item')
		tabItems.forEach((item) => {
			item.classList.remove('active')
		})

		e.currentTarget.classList.add('active')
	}


    return(
        // <!-- horizontal-tabs -->
		<div className="horizontal-tabs">
			<a className="tab-item" href="#1" onClick={clickTab}>마이 세팅</a>
			<a className="tab-item" href="#2" onClick={clickTab}>프로필</a>
			<a className="tab-item" href="#3" onClick={clickTab}>보안 설정</a>
			<a className="tab-item" href="#4" onClick={clickTab}>팀</a>
			<a className="tab-item" href="#5" onClick={clickTab}>Plan</a>
			<a className="tab-item" href="#6" onClick={clickTab}>가격 정책</a>
			<a className="tab-item" href="#7" onClick={clickTab}>Email</a>
			<a className="tab-item" href="#8" onClick={clickTab}>알람 설정</a>
			<a className="tab-item active" href="#9" onClick={clickTab}>어플 관리</a>
			<a className="tab-item" href="#10" onClick={clickTab}>API</a>
		</div>
    )
}