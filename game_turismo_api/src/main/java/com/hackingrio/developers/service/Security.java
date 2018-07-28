package com.hackingrio.developers.service;

import java.util.Arrays;
import java.util.Base64;

public class Security {
	public static String criptografiaBase64Encoder(String valor) {
        byte[] encodedBytes = Base64.getEncoder().encode(valor.getBytes());
        return Arrays.toString(encodedBytes);
    }
    public static String descriptografiaBase64Decoder(String valorCriptografado) {
        byte[] decodedBytes = Base64.getMimeDecoder().decode(valorCriptografado);
        String output = new String(decodedBytes);
        return output;//Arrays.toString(decodedBytes);
    }
}
