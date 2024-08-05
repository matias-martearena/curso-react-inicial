# Aplicacion de viajes en React JS - Introduccion a react js UTN

## Consigna

Desarrollen una aplicación web que permita a los usuarios explorar destinos turísticos virtuales.

La aplicación debe ofrecer una experiencia interactiva para explorar diferentes ciudades, ver detalles
sobre ellas y añadir comentarios sobre cada lugar visitado.

## Requisitos

    1. Estructura de la Aplicación

        - Inicio: Página principal con una lista de ciudades disponibles para explorar.
        - Detalles de la Ciudad: Página que muestra detalles sobre una ciudad seleccionada, incluyendo imágenes, una descripción y una lista de puntos de interés.
        - Comentarios: Página donde los usuarios pueden agregar y ver comentarios sobre las ciudades que han visitado.
        - Acerca de: Página con información sobre el equipo de desarrollo y la aplicación.

    2. Componentes Requeridos

        - CityList: Componente que muestra una lista de ciudades. Debe recibir una lista de ciudades como props desde el componente principal.
        - CityItem: Componente que representa una ciudad individual en la lista. Debe recibir los datos de la ciudad y una función para manejar la selección de la ciudad como props.
        - CityDetails: Componente que muestra detalles de la ciudad seleccionada, incluyendo una descripción, imágenes y una lista de puntos de interés. Debe recibir los datos de la ciudad como props y utilizar useState para manejar la información mostrada.
        - CommentForm: Componente que incluye un formulario para agregar nuevos
        comentarios sobre las ciudades. Debe manejar el estado del formulario usando
        useState y llamar a una función proporcionada por el componente padre para
        agregar el comentario.
        - CommentList: Componente que muestra una lista de comentarios para una ciudad
        específica. Debe recibir los comentarios como props.
        - Header: Componente que contiene la navegación entre las diferentes páginas.
        - Footer: Componente para información adicional como derechos de autor.

    3. Funcionalidades

        - Explorar Ciudades: Los usuarios pueden ver una lista de ciudades y seleccionar una para explorar más a fondo.
        - Detalles de la Ciudad: Al seleccionar una ciudad, los usuarios deben ser dirigidos a una página con detalles completos sobre la ciudad.
        - Agregar Comentarios: Los usuarios pueden añadir comentarios sobre las ciudades visitadas y ver comentarios de otros usuarios.
        - Navegación: Utilizar React Router para la navegación entre las páginas de Inicio, Detalles de la Ciudad, Comentarios y Acerca de.
        - Estado de Comentarios: Utilizar useState para manejar el estado de los comentarios y la información de la ciudad.

    4. Requisitos Técnicos

        - Uso de Props: Asegúrate de pasar datos entre componentes usando props. Por ejemplo, pasar la lista de ciudades al componente CityList y los detalles de la ciudad al componente CityDetails.
        - Uso de useState: Utiliza useState para manejar el estado en componentes como CityDetails y CommentForm.
        - React Router: Implementa React Router para gestionar la navegación entre las diferentes páginas.

## Entrega

    ● Fecha de Entrega: 12 de agosto.
    ● Cómo Entregar: Suban el proyecto a la plataforma de campus y asegúrense de incluir toda
    la documentación necesaria.

---
