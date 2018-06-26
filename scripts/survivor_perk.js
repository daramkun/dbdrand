var survivor_perks;

function initialize_survivor_perks ( loadComplete ) {
    $.getJSON ( 'https://raw.githubusercontent.com/daramkun/dbdrand/master/data/survivors.perks.json', function ( json ) {
        survivor_perks = json.survivor_perks;
        loadComplete ();
    } );
}

function random_select_survivor_perks ( num ) {
    var perks = survivor_perks.slice ();
    var returnArray = new Array ();

    while ( returnArray.length != num ) {
        var randomValue = Math.round ( Math.random () * perks.length );
        var perk = survivor_perks [ randomValue ];
        if ( perk == null || perk == undefined || returnArray.indexOf ( perk ) > -1 ) {
            continue;
        }
        returnArray.push ( perk );
        survivor_perks.slice ( randomValue, 1 );
    }

    return returnArray;
}
