
/*
 * GET home page.
 */

var icons = [
    { 
        path: 'images/noun_project_24414.png',
        name: 'International Space Station1',
        link: '',
        attr: '<p>Designed by <a href="http://thenounproject.com/johnnyrocketcreative">Jon Daiello</a> 2013 from The Noun Project</p>'
    }, 
    { 
        path: 'images/noun_project_24414.png',
        name: 'International Space Station2',
        link: '',
        attr: '<p>Designed by <a href="http://thenounproject.com/johnnyrocketcreative">Jon Daiello</a> 2013 from The Noun Project</p>'
    }, 
    { 
        path: 'images/noun_project_24414.png',
        name: 'International Space Station3',
        link: '',
        attr: '<p>Designed by <a href="http://thenounproject.com/johnnyrocketcreative">Jon Daiello</a> 2013 from The Noun Project</p>'
    }, 
    { 
        path: 'images/noun_project_24414.png',
        name: 'International Space Station4',
        link: '',
        attr: '<p>Designed by <a href="http://thenounproject.com/johnnyrocketcreative">Jon Daiello</a> 2013 from The Noun Project</p>'
    }, 
    { 
        path: 'images/noun_project_24414.png',
        name: 'International Space Station5',
        link: '',
        attr: '<p>Designed by <a href="http://thenounproject.com/johnnyrocketcreative">Jon Daiello</a> 2013 from The Noun Project</p>'
    }, 
    { 
        path: 'images/noun_project_24414.png',
        name: 'International Space Station6',
        link: '',
        attr: '<p>Designed by <a href="http://thenounproject.com/johnnyrocketcreative">Jon Daiello</a> 2013 from The Noun Project</p>'
    }
    ];

var shuffleIcons = function() {
    // adapted from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = icons.length,
        temporaryValue,
        randomIndex;

    while ( 0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = icons[currentIndex];
        icons[currentIndex] = icons[randomIndex];
        icons[randomIndex] = temporaryValue;
    }
}

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

exports.api = function(req, res){
    shuffleIcons();
    res.json({ 
        api: 'ok',
        icons: icons.slice(0, 3)
    });
};
