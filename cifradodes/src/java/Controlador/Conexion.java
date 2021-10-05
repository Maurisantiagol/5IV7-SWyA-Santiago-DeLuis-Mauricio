/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author mauri
 */
public class Conexion {
    public static Connection getConnection(){
        String url, userName, password;
        
        url = "jdbc:mysql://localhost/bearcareful";
        userName = "root";
        password = "maika";
        
        Connection con = null;
        
        try{
            Class.forName("com.mysql.jdbc.Driver");
            
            con = DriverManager.getConnection(url, userName, password);
            
            System.out.println("Conexion Exitosa con la BD");
        
        }catch(Exception e){
            System.out.println("Error al conectar la BD");
            System.out.println(e.getMessage());
        
        }
        return con;
    }
}
