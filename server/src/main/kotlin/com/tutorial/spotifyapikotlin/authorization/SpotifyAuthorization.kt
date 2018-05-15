package com.tutorial.spotifyapikotlin.authorization

import com.wrapper.spotify.SpotifyApi
import com.wrapper.spotify.SpotifyHttpManager
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest
import org.springframework.stereotype.Component

/**
 * Created by Rasmus on 2018-05-14.
 */
@Component
class SpotifyAuthorization {

    private val redirectUri = SpotifyHttpManager.
            makeUri("http://localhost:3000/auth/spotify/callback")

    fun getSpotifyBuilder(clientID: String, clientSecret: String): SpotifyApi
            = SpotifyApi.builder()
            .setClientId(clientID)
            .setClientSecret(clientSecret)
            .setRedirectUri(redirectUri)
            .build()
    fun authorizationCodeUriRequest(spotifyApi: SpotifyApi): AuthorizationCodeUriRequest
            = spotifyApi.authorizationCodeUri()
            .state("x4xkmn9pu3j6ukrs8n")
            .scope("user-read-birthdate,user-read-email")
            .show_dialog(true)
            .build()
    fun buildAuthorizationCode( spotifyApi: SpotifyApi, code: String ): AuthorizationCodeRequest
            = spotifyApi.authorizationCode(code)
            .build()
    fun tokenAuthorization(accessToken: String?): SpotifyApi =
            SpotifyApi.Builder().setAccessToken(accessToken).build()
}