import MainHeader from './main/MainHeader'
import HorizontalTabs from './main/HorizontalTabs'
import ContentHeader from './main/ContentHeader'
import Content from './main/Content'

export default function Main(){
    return(
        // <!-- ==================== [ main ]  ==================== -->
        <main className="main">
            <div className="responsive-wrapper">
                < MainHeader />
                < HorizontalTabs />
                < ContentHeader />
                < Content />
            </div>
        </main>
    )
}