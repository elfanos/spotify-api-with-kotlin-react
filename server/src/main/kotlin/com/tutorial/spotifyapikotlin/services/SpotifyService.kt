package com.tutorial.spotifyapikotlin.services

import com.wrapper.spotify.SpotifyApi
import com.wrapper.spotify.exceptions.SpotifyWebApiException
import com.wrapper.spotify.model_objects.specification.User
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest
import org.springframework.stereotype.Service
import java.io.IOException



@Service
class SpotifyService {

    fun authorizationCodeUriSync( authorizationCodeUriRequest:
                                  AuthorizationCodeUriRequest ): String? {
        try {
            return authorizationCodeUriRequest.execute().toString()
        }catch (e: IOException){
            println("error " + e.localizedMessage)

        }catch (e: SpotifyWebApiException){
            println("Spotify web exception authorization code uri request: " + e.localizedMessage)
        }
        return null
    }

    fun authorizationCodeSync( authorizationCodeRequest: AuthorizationCodeRequest,
                               spotifyApi: SpotifyApi ): List<String>? {
        try {
            val authorizationCodeCredentials = authorizationCodeRequest.execute()
            spotifyApi.accessToken = authorizationCodeCredentials.accessToken
            spotifyApi.refreshToken = authorizationCodeCredentials.refreshToken
            return listOf<String>(spotifyApi.accessToken,spotifyApi.refreshToken)

        }catch (e: IOException){
            println("error " + e.localizedMessage)

        }catch (e: SpotifyWebApiException){
            println("Spotify web exception authorizaiton code request: " + e.localizedMessage)
        }
        return null
    }

    fun currentUserProfileAsync( accessToken: String?, spotifyApi: SpotifyApi ): User? {
        val currentUserProfile = spotifyApi.currentUsersProfile.build()
        try {
            return currentUserProfile.execute()
        }catch (e: IOException){
            println("error " + e.localizedMessage)

        }catch (e: SpotifyWebApiException){
            println("Spotify web exception profile sync: " + e.localizedMessage)
        }
        return null
    }
}

