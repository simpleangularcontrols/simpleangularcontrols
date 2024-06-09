using System;
using System.Text;

namespace Build.extensions
{
    public static class Base64Encoding
    {
        public static string ToBase64(this string plainText)
        {
            var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
            return Convert.ToBase64String(plainTextBytes);
        }
    }
}