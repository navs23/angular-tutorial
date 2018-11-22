var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log(__dirname + '/public/app');
  res.sendFile ('/home/ubuntu/workspace/myserver/public/app/index.html');
  
});

router.get('/api/events/:id?',  function(req, res, next) {
 
  var events= [ 
            {id:1,title:"angular daily meet",time:"10:00am",price:"free",location:"London",active:true},
            {id:2,title:"crypto daily meet",time:"11:00am",price:"£5",location:"London",active:true},
            {id:3,title:"lunch and learn",time:"12:00pm",price:"free",location:"London",active:true}
    ];
    console.log("id is %s",req.params.id);
    var result=(events.filter((e)=>{
        return (e.id == req.params.id) || (req.params.id==undefined)
      
    }));
     console.log("result is %s",result);
  res.json(result);
  
});


module.exports = router;
