import React, { Component, Suspense, lazy } from 'react';
import { COLORS } from '../shared/colors';
import { TUTORIALS } from '../shared/tutorials';
import Header from './HeaderComponent';
import { Switch, Redirect, Route } from 'react-router-dom';
import Footer from './FooterComponent';
import { CUBE_DATA } from '../shared/cubeData';
import { Loader } from "./LoadingComponent";
import ErrorBoundary from "./ErrorBoundaryCopnonent";

const HomePage = lazy(() => import('./HomeComponent'));
const TutePage = lazy(() => import('./TuteComponent'));
const Contact = lazy(() => import('./ContactComponent'));

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: COLORS,
            tutorials: TUTORIALS,
            cubeData: CUBE_DATA
        };
        this.handleScrollTop = this.handleScrollTop.bind(this);
    }

    handleScrollTop(event) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render(){

        const TutorialComponent = ({match}) => {
            return(
                <>
                    {this.state.tutorials.filter((tute) => tute.id === parseInt(match.params.tuteId, 10))[0].tuteComponent}
                </>
            );
        }

        return(
            <>
                <Header />
                <ErrorBoundary>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            <Route path="/home" component={() => <HomePage
                                threeData={this.state.cubeData.filter((data) => data.id === 1)[0]}
                                cubeData={this.state.colors.filter((color) => color.id === 1)[0]}
                            /> } />
                            <Route exact path="/tutorial"
                                component={() => <TutePage colors={this.state.colors}
                                                    tutorials={this.state.tutorials}
                                                    scrollTop = {this.handleScrollTop}
                                                /> }
                            />
                            <Route path="/tutorial/:tuteId" component={TutorialComponent} />
                            <Route path='/contact'>
                                <Contact />
                            </Route>
                            <Redirect to="/home" />
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
                <Footer />
            </>
        );
    }
}

export default Main;