
/*
 * GET home page.
 */

var icons = [
    { 
        path: 'images/noun_project_12346.png',
        name: 'Alien Abduction',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/jmkeuning" target="_blank">James Keuning </a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_12458.png',
        name: 'Death Star',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/iconoci" target="_blank">iconoci</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_16286.png',
        name: 'Astronaut',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/avasiloiei.liviu" target="_blank">Avasiloiei Liviu</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_170.png',
        name: 'Sun',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/noun/sun/#icon-No170" target="_blank">Unknown Designer</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_17621.png',
        name: 'Space Invader',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/TheGiantBaboon" target="_blank">James Rainsford</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_23971.png',
        name: 'Hubble Space Telescope',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/nrodriguezlima" target="_blank">nikki rodriguez</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_24414.png',
        name: 'International Space Station6',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/johnnyrocketcreative">Jon Daiello</a> 2013 from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_24736.png',
        name: 'Space Tower',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/fivecity_5c" target="_blank">José Manuel Rodríguez</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_3590.png',
        name: 'Space Hopper',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/tokefrello" target="_blank">Toke Frello</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_4917.png',
        name: 'Mars Rover',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/serre.marc" target="_blank">Marc Serre</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_709.png',
        name: 'Space Shuttle',
        link: '',
        attr: 'From The Noun Project'
    }, 
    { 
        path: 'images/noun_project_7478.png',
        name: 'Earth',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/nicografico" target="_blank">Nicolas Ramallo</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_7536.png',
        name: 'Solar System',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/misirlou" target="_blank">Benjamin Orlovski</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_792.png',
        name: 'Planet',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/tokefrello" target="_blank">Toke Frello</a> from The Noun Project'
    }, 
    { 
        path: 'images/noun_project_8661.png',
        name: 'Space Needle',
        link: '',
        attr: 'Designed by <a href="http://thenounproject.com/kellydh" target="_blank">Kelly Hamilton</a> from The Noun Project'
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
