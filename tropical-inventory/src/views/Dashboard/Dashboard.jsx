import React from 'react';
import {
    withStyles, Grid
} from 'material-ui';
import {
    ContentCopy, Store, InfoOutline, Warning, DateRange, LocalOffer, Update, ArrowUpward, AccessTime, Accessibility
} from 'material-ui-icons';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';

import {
    StatsCard, ChartCard, TasksCard, RegularCard, Table, ItemGrid
} from 'components';

import {
    dailySalesChart ,
    emailsSubscriptionChart,
    completedTasksChart
} from 'variables/charts';

import { dashboardStyle } from 'variables/styles';

class Dashboard extends React.Component{
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render(){
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={InfoOutline}
                            iconColor="red"
                            title="Low Inventory"
                            description="12mm White"
                            small="north"
                            statIcon={Warning}
                            statIconColor="danger"
                            statLink={{text: "Order more soon...", href:"#pablo"}}
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={Store}
                            iconColor="green"
                            title="Incoming Orders"
                            description="+55"
                            statIcon={DateRange}
                            statText="Last 24 Hours"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={ContentCopy}
                            iconColor="orange"
                            title="New orders"
                            description="75"
                            statIcon={LocalOffer}
                            statText="Tracked"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={Accessibility}
                            iconColor="blue"
                            title="Users Online"
                            description="1"
                            statIcon={Update}
                            statText="Just Updated"
                        />
                    </ItemGrid>
                </Grid>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={dailySalesChart.data}
                                    type="Line"
                                    options={dailySalesChart.options}
                                    listener={
                                        dailySalesChart.animation
                                    }
                                />
                            }
                            chartColor="green"
                            title="Daily Sales"
                            text={
                                <span>
                                    <span className={this.props.classes.successText}><ArrowUpward className={this.props.classes.upArrowCardCategory}/> 55%</span> increase in today sales.
                                </span>
                            }
                            statIcon={AccessTime}
                            statText="updated 4 days ago"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={emailsSubscriptionChart.data}
                                    type="Bar"
                                    options={emailsSubscriptionChart.options}
                                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                    listener={
                                        emailsSubscriptionChart.animation
                                    }
                                />
                            }
                            chartColor="orange"
                            title="Monthly Inventory"
                            text="Tropical Flooring"
                            statIcon={AccessTime}
                            statText="updated 2 days ago"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={completedTasksChart.data}
                                    type="Line"
                                    options={completedTasksChart.options}
                                    listener={
                                        completedTasksChart.animation
                                    }
                                />
                            }
                            chartColor="red"
                            title="North Inventory"
                            text="Warehouse 1"
                            statIcon={AccessTime}
                            statText="updated 2 days ago"
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
