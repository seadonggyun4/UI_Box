export default function MainHeader(){
    return(
        // <!-- main-header -->
		<div className="main-header">
			<h1>Dashboard</h1>
			<div className="search">
				<input type="text" placeholder="Search" />
				<button type="submit">
					<i className="ph-magnifying-glass-bold"></i>
				</button>
			</div>
		</div>
    )
}