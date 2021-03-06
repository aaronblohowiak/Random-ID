#Pure JavaScript random ID generation for browser and server.

Random-ID produces Base64-URI Encoded ids with 128 bits of random information.

These are roughly equivalent to UUIDs, but they do not have the correct formatting or special bits set.  If you're just looking for a quick way to generate a long random id that is uri-safe, then this library might be just what you needed =)

> **This is not RFC4122 complaint!** Use [https://github.com/broofa/node-uuid](https://github.com/broofa/node-uuid) if you want RFC-Compliant UUIDs

##USAGE: newId(length, radix)

    length - the desired number of characters

    radix  - the number of allowable values for each character, 64 by default.

##INSTALLATION

    npm install uuid-pure

    var newId = require("uuid-pure").newId;
    
##EXAMPLES:
        // No arguments  - returns a 22 character long base64-uri random string
        >>> newId()
        'DPBCJL-P3trJvvqvvH2yOj'

        // One argument - returns ID of the specified length
        >>> newId(15)     // 15 character ID (default base=62)
        '2oXmp_mD7WWA04T'

        // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 64)
        >>> newId(8, 2)  // 8 character ID (base=2)
        "01001010"
        >>> newId(8, 10) // 8 character ID (base=10)
        "47473046"
        >>> newId(8, 16) // 8 character ID (base=16)
        "098F4D35"

Copyright (c) 2010 Aaron Blohowiak
Dual licensed under the MIT and GPL licenses.

## Historical Note.
This library was previously called uuid-pure-js, and it is the npm package uuid-pure and not random-id for historical reasons.

Robert Kieffer pointed out that this is not an RFC-compliant uuid and requested that I remove the attribution as the work is materially different than his original Math.uuid.js library.  If you're looking to work with systems that require an RFC-compliant UUID, please use his excellent node-uuid library which works on both the server and the browser.  For a faster (but requiring native code) solution, see [https://bitbucket.org/nikhilm/uuidjs](https://bitbucket.org/nikhilm/uuidjs).