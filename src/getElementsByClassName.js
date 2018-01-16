// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
/* 
You should use document.body, element.childNodes, and element.classList

*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var node =  node || document.body;
  var results = [];
  
  // basecase
  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }
 
  for (var i = 0; i < node.children.length; i++) {
    var childNodes = getElementsByClassName(className, node.children[i]);
    results = results.concat(childNodes);
  }
  
  
  return results;
};

/*
1. START with body
we need to check if it contains the classname
we also need to check if the nodes have the classname
and check if the nodes nodes have a class name
so if we loop over the node and recursively check with our if statement to push it
  1a. push with result if meets .classList and .classlist.contains(className)
  2a.




*/

    
    // else if (node.childNodes[i].classList) {
    //    getElementsByClassName(className, node.childNodes[i], results);
    // }
    // else {
    //   getElementsByClassName(className, node.childNodes[i], results);
    // }



