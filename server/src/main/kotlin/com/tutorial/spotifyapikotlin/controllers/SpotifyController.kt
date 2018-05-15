package com.tutorial.spotifyapikotlin.controllers

import com.tutorial.spotifyapikotlin.authorization.SpotifyAuthorization
import com.tutorial.spotifyapikotlin.services.SpotifyService
import com.wrapper.spotify.model_objects.specification.User
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by Rasmus on 2018-05-13.
 */
@RestController
class SpotifyController {


    @Value("\${spotify}")
    lateinit var clientID: String

    @Value("\${spotify.clientsecret}")
    lateinit var clientSecret: String

    var spotifyAuth = SpotifyAuthorization()

    @RequestMapping("/api/spotify/callback/uri")
    fun authorizationUri(): String?
            = createSpotifyService()
            .authorizationCodeUriSync(
                        spotifyAuth.authorizationCodeUriRequest(
                                spotifyAuth.getSpotifyBuilder(clientID,clientSecret)
                        )
                )
    @RequestMapping("/api/spotify/token/{code}")
    fun authorizationToken(@PathVariable code: String): List<String>?
            = createSpotifyService()
            .authorizationCodeSync(
                    spotifyAuth.buildAuthorizationCode(
                            spotifyAuth.getSpotifyBuilder( clientID,clientSecret ), code
                    ),
                    spotifyAuth.getSpotifyBuilder( clientID, clientSecret )
            )
    @RequestMapping("/api/spotify/user/{token}")
    fun currentUserData(@PathVariable token: String?): User?
            = createSpotifyService()
            .currentUserProfileAsync(
                    token, spotifyAuth.tokenAuthorization( token )
            )

    fun createSpotifyService(): SpotifyService = SpotifyService()

    /*companion object {
        val logger: Logger =
                LoggerFactory.getLogger(SpotifyController::class.java)
    }*/
}