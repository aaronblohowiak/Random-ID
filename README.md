#Pure JavaScript uuid generation for browser and server.

Produces Base64-URI Encoded UUIDs (purely random.)


##USAGE: uuid(length, radix)

    length - the desired number of characters

    radix  - the number of allowable values for each character.

##INSTALLATION

    npm install uuid-pure

    var uuid = require("uuid-pure").uuid;
    
##EXAMPLES:
        // No arguments  - returns RFC4122, version 4 ID
        >>> uuid()
        'DPBCJL-P3trJvvqvvH2yOj'

        // One argument - returns ID of the specified length
        >>> uuid(15)     // 15 character ID (default base=62)
        '2oXmp_mD7WWA04T'

        // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 64)
        >>> uuid(8, 2)  // 8 character ID (base=2)
        "01001010"
        >>> uuid(8, 10) // 8 character ID (base=10)
        "47473046"
        >>> uuid(8, 16) // 8 character ID (base=16)
        "098F4D35"

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.

Edited and packaged for `npm` by Aaron Blohowiak