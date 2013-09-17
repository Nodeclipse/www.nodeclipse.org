
define ->
    # Me.coffee
    NICKNAME = 'island205'
    {
        nickname: NICKNAME
        age: 24
        hobby: ['coding', 'reading', 'running']
        blog: "http://#{NICKNAME}.com"
        blogfeed: ->
            @blog + "/rss"
        twitter: "https://twitter.com/#!/#{NICKNAME}"
    }