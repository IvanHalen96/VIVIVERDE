from django.http import HttpResponse
from django.template import loader

def mapas(request):
    template = loader.get_template('mapas.html')
    return HttpResponse(template.render())