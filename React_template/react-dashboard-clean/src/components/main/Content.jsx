//images
import discord from '../../img/discord.svg'
import dropbox from '../../img/dropbox.svg'
import figma from '../../img/figma.svg'
import github from '../../img/github.svg'
import googleChrome from '../../img/google-chrome.svg'
import googleDrive from '../../img/google-drive.svg'
import jira from '../../img/jira.svg'
import notion from '../../img/notion.svg'
import slack from '../../img/slack.svg'
import zapier from '../../img/zapier.svg'
import zendesk from '../../img/zendesk.svg'
import zeplin from '../../img/zeplin.svg'


import Isotope from 'isotope-layout'
import { useEffect } from 'react'


export default function Content(){
	function clickTab(e){
		const tabItems = document.querySelectorAll('.content-panel .vertical-tabs .tab-item')
		tabItems.forEach((item) => {
			item.classList.remove('active')
		})

		e.currentTarget.classList.add('active')
	}


	useEffect(() => {
		const grid = document.querySelector('.card-grid')

		// isotope 라이브러리 사용
        const iso =  new Isotope( grid , {
			itemSelector: '.card-grid .card', // 적용할 아이템
			// masonry: {
			// 	columnWidth: 100, // 아티클 요소 넓이 값
			// 	columnHeight: 500
			// },
			transitionDuration: "0.5s" // 전환되는 속도
		}) //grid로 반환
  
		const btns = document.querySelectorAll('.content-panel .vertical-tabs .tab-item')
  
		btns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
	
				// 함수 중복실행 방지
				const isOn = e.currentTarget.classList.contains('on')
				if(isOn === false){
					activation(e)
				}
			})
  
			function activation(event){

				//버튼 활성화
				btns.forEach( (btn) => {
					btn.classList.remove('on')
				})
				event.currentTarget.classList.add('on')

				// console.log(event.currentTarget)

				// 탐색을 위한 값 a_href 탐색
				const btn_a = event.currentTarget
				const a_href = btn_a.getAttribute('href')

				console.log(a_href)


				//grid값에 arrange매서드 사용 -> filter에 들어와있는 값을 통해 해당 클래스를 탐색
				iso.arrange({filter: a_href}) 
			}
  
		})
	}, [])

    return(
        // <!-- content -->
		<div className="content">
            {/* content-panel */}
			<div className="content-panel">
				<div className="vertical-tabs">
					<a  className="tab-item active" href="*" onClick={clickTab}>View all</a>
					<a  className="tab-item" href=".develope" onClick={clickTab}>개발자 도구</a>
					<a  className="tab-item" href=".cooperation" onClick={clickTab}>협업 도구</a>
					<a  className="tab-item" href=".workflow" onClick={clickTab}>워크플로우 도구</a>
					<a  className="tab-item" href=".browser" onClick={clickTab}>브라우저 도구</a>
					<a  className="tab-item" href=".design" onClick={clickTab}>디자인 도구</a>
				</div>
			</div>
            {/* content-main */}
			<div className="content-main">
				<div className="card-grid">
					<article className="card design">
						<div className="card-header">
							<div>
								<span><img src={zeplin} alt="zepline"/></span>
								<h3>Zeplin</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox"  defaultChecked/>
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>디자이너와 개발자 간의 협업 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#1">View integration</a>
						</div>
					</article>
					<article className="card develope">
						<div className="card-header">
							<div>
								<span><img src={github} alt="github"/></span>
								<h3>GitHub</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" />
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>코드 형상관리를 위한 개발 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#2">View integration</a>
						</div>
					</article>
					<article className="card design">
						<div className="card-header">
							<div>
								<span><img src={figma} alt="figma"/></span>
								<h3>Figma</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" defaultChecked/>
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>UI 디자인 시안 제작 디자인 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#3">View integration</a>
						</div>
					</article>
					<article className="card workflow">
						<div className="card-header">
							<div>
								<span><img src={zapier} alt="zapier"/></span>
								<h3>Zapier</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" />
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>맞춤형 자동화 및 앱과의 통합을 도와주는 워크플로우 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#4">View integration</a>
						</div>
					</article>
					<article className="card cooperation">
						<div className="card-header">
							<div>
								<span><img src={notion} alt="notion"/></span>
								<h3>Notion</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" defaultChecked/>
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>마크다운 기반의 문서정리 및 공유를 할수 있는 협업 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#5">View integration</a>
						</div>
					</article>
					<article className="card cooperation">
						<div className="card-header">
							<div>
								<span><img src={slack} alt="slack"/></span>
								<h3>Slack</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" defaultChecked/>
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>팀원과의 의사소통 및 일정 조정을 할 수 있는 협업 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#6">View integration</a>
						</div>
					</article>
					<article className="card workflow">
						<div className="card-header">
							<div>
								<span><img src={zendesk} alt="zendesk"/></span>
								<h3>Zendesk</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" />
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>Zendesk 티켓 연결 및 자동화 를 도와주는 워크플로우 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#7">View integration</a>
						</div>
					</article>
					<article className="card cooperation">
						<div className="card-header">
							<div>
								<span><img src={jira} alt="jira"/></span>
								<h3>Atlassian JIRA</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" />
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>소프트웨어 개발 계획 및 일정 추적을 용이하게 하는 협업 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#8">View integration</a>
						</div>
					</article>
					<article className="card workflow">
						<div className="card-header">
							<div>
								<span><img src={dropbox} alt="dropbox" /></span>
								<h3>Dropbox</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox"  defaultChecked/>
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>업무에 필요한 파일, asset 등을 모아 관리할수 있는 워크플로우 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#9">View integration</a>
						</div>
					</article>
					<article className="card browser">
						<div className="card-header">
							<div>
								<span><img src={googleChrome} alt="googleChrom"/></span>
								<h3>Google Chrome</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" />
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>유용한 기능 및 웹 환경에 최적화된 브라우저 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#10">View integration</a>
						</div>
					</article>
					<article className="card cooperation">
						<div className="card-header">
							<div>
								<span><img src={discord} alt="discord"/></span>
								<h3>Discord</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" />
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>팀원과의 원격 회의 및 의사전달을 위한 협업 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#11">View integration</a>
						</div>
					</article>
					<article className="card browser">
						<div className="card-header">
							<div>
								<span><img src={googleDrive} alt="googleDrive"/></span>
								<h3>Google Drive</h3>
							</div>
							<label className="toggle" >
								<input type="checkbox" />
								<span></span>
							</label>
						</div>
						<div className="card-body">
							<p>Google 계정을 연결하여 전체 팀 내에서 파일 공유를 할수 있는 브라우저 도구.</p>
						</div>
						<div className="card-footer">
							<a href="#12">View integration</a>
						</div>
					</article>
				</div>
			</div>
		</div>
    )
}