export default function ContentHeader(){
    return(
        // <!-- content-header -->
		<div className="content-header">
			<div className="content-header-intro">
				<h2>통합적인 어플 관리</h2>
				<p>매일 사용하는 도구를 연결하여 워크플로를 강화해보세요!</p>
			</div>
			<div className="content-header-actions">
				<a href="#1" className="button">
					<i className="ph-faders-bold"></i>
					<span>Filters</span>
				</a>
				<a href="#2" className="button">
					<i className="ph-plus-bold"></i>
					<span>Request integration</span>
				</a>
			</div>
		</div>
    )
}