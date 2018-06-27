var killers;

function initialize_killers ( loadComplete ) {
    $.getJSON ( 'data/killers.json', function ( json ) {
        killers = json.killers;
        loadComplete ();
    } );
}

function get_killers () { return killers; }

function random_select_killer () {
    var randomValue = Math.round ( Math.random () * killers.length );
    return killers [ randomValue ];
}
