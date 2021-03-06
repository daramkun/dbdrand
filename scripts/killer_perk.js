var killer_perks;

function initialize_killer_perks ( loadComplete ) {
    if ( killer_perks != null && killer_perks != undefined ) return;
    $.getJSON ( 'data/killers.perks.json', function ( json ) {
        killer_perks = json.killer_perks;
        loadComplete ();
    } );
}

function random_select_killer_perks ( num ) {
    var returnArray = new Array ();

    while ( returnArray.length != num ) {
        var randomValue = Math.round ( Math.random () * ( killer_perks.length - 1 ) );
        var perk = killer_perks [ randomValue ];
        if ( perk == null || perk == undefined || returnArray.indexOf ( perk ) > -1 ) {
            continue;
        }
        returnArray.push ( perk );
    }

    return returnArray;
}
