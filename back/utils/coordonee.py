import requests

# Retourne une adresse à l'aide d'une query (ex: 12 Rue robert Strasbourg)
def geocode(query):
    try:
        adresse=query.replace(" ","+")
        api_endpoint = "https://api-adresse.data.gouv.fr/search"
        api_params = {"q": adresse}
        response = requests.get(api_endpoint, params=api_params)

        if response.status_code == 200:
            return response.json()['features'][0]['properties']
        else:
            print(f"La requête a échoué avec le code de statut: {response.status_code}")
            return None
    except Exception as e:
        print(f"Une erreur s'est produite lors de l'appel de l'API: {str(e)}")
        return None
    

# Retourne une adresse à l'aide de la longitude et lattitude
def reverse_geocode(lon, lat):
    try:
        api_endpoint = "https://api-adresse.data.gouv.fr/reverse"
        api_params = {"lon": lon, "lat": lat}
        response = requests.get(api_endpoint, params=api_params)

        if response.status_code == 200:
            return response.json()['features'][0]['properties']
        else:
            print(f"La requête a échoué avec le code de statut: {response.status_code}")
            return None
    except Exception as e:
        print(f"Une erreur s'est produite lors de l'appel de l'API: {str(e)}")
        return None
