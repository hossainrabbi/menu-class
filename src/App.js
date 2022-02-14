import React from 'react';
import Category from './components/Category';
import Menu from './components/Menu';
import menu from './data';
import { MainContainer } from './styles/Elements.style';
import GlobalStyle from './styles/Global.style';

class App extends React.Component {
    // const [menuItems, setMenuItems] = useState(menu);
    // const [categories, setCategories] = useState([]);
    state = {
        menuItems: menu,
        categories: [],
    };

    // useEffect(() => {
    //     setCategories(['all', ...new Set(menu.map((item) => item.category))]);
    // }, [menuItems]);
    componentDidMount() {
        this.setState({
            categories: ['all', ...new Set(menu.map((item) => item.category))],
        });
    }

    filterCategory = (category) => {
        if (category === 'all') {
            this.setState({
                menuItems: menu,
            });
            return;
        }

        this.setState({
            menuItems: menu.filter((item) => item.category === category),
        });
    };

    render() {
        return (
            <MainContainer>
                <GlobalStyle />
                <Category
                    categories={this.state?.categories}
                    filterCategory={this.filterCategory}
                />
                <Menu menuItems={this.state?.menuItems} />
            </MainContainer>
        );
    }
}

export default App;
