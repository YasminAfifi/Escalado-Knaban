import React, { Component } from 'react';
import TaskCard from './card';
import ProjTooltip from './tooltip';
import IconButton from '@material-ui/core/IconButton';
import { EmojiObjects, ViewList, Loop, BugReport, Done, Add } from '@material-ui/icons';
import ProjLoader from './loader';

class List extends Component {
    render() {
        return (
            <div className="con">
                <div className="space">
                    {/* <h2 className="list">{this.props.listName[0] ? this.props.listName[0].title : "Loading..."}</h2> */}
                </div>
                <div className="row">
                    <div className="col-sm mcell mcolor1">
                        <div className="mcell-title story">
                            <IconButton size="small" color="default"><EmojiObjects /></IconButton>
                            Backlog
                             <ProjTooltip title="Add Cards in Backlog List" id="1" placement="top" listType={this.props.listType} />

                        </div>
                        <TaskCard cards={this.props.cards} loading={this.props.loading} filter="1" />
                    </div>
                    <div className="col-sm mcell mcolor2">
                        <div className="mcell-title story">
                            <IconButton size="small" color="default"><ViewList /></IconButton>
                            TODO
                      <ProjTooltip id="2" title="Add Cards in TODO List" placement="top" listType={this.props.listType} />
                        </div>
                        <TaskCard cards={this.props.cards} loading={this.props.loading} filter="2" />
                    </div>

                    <div className="col-sm mcell mcolor3">
                        <div className="mcell-title story">
                            <IconButton size="small" color="default"><Loop /></IconButton>
                            In Progress
                      <ProjTooltip id="3" title="Add Cards in In Progress List" placement="top" listType={this.props.listType} />
                        </div>
                        <TaskCard cards={this.props.cards} loading={this.props.loading} filter="3" />
                    </div>
                    <div className="col-sm mcell mcolor4">
                        <div className="mcell-title story">
                            <IconButton size="small" color="default"><BugReport /></IconButton>
                            Testing
                      <ProjTooltip id="4" title="Add Cards in Testing List" placement="top" listType={this.props.listType} />
                        </div>
                        <TaskCard cards={this.props.cards} loading={this.props.loading} filter="4" />
                    </div>
                    <div className="col-sm mcell mcolor5">
                        <div className="mcell-title story">
                            <IconButton size="small" color="default"><Done /></IconButton>
                            Completed
                      <ProjTooltip id="4" title="Add Cards in Completed List" placement="top" listType={this.props.listType} />
                        </div>
                        <TaskCard cards={this.props.cards} loading={this.props.loading} filter="5" />
                    </div>
                </div>
            </div>
        )
    }

}
export default List;