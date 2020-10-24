import React , { Component } from 'react';
import { Card , CardBody , CardImg , CardImgOverlay , CardText, CardTitle } from 'reactstrap';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';

    function RenderDish({dish , comments}) {
    return(
                   <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />  
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>                  
                        </Card>
                    </div>
        )

    }

    function RenderComments({comments}) {
      return(
       <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        {comments.map(comment => {                           
                                                       
                            return(
                                <div>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    <p></p>
                                </div>                            
                            )
                        })}
                    </div>
      )
      
    }

const DetailComponent =(props)=>{ 
        if(props.dish!=null)
        {
        const dish = props.dish
        const comments = props.comments

        return(
            <div className="container">
               <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/Menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>              
                </div>
                <div className="row">
                   <RenderDish dish={dish} />
                   <RenderComments comments={comments} />
                   
                </div>
            </div>
            
            
        );
    }
    else
    {
        return(
          <div> </div>
        );
    }
    

}

export default DetailComponent;