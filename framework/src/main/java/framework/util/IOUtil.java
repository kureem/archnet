package framework.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;

/**
 * The Class IOUtil.
 *
 * @author Kureem Rossaye<br>
 *         kureem@gmail.com Oct 22, 2008
 */
public class IOUtil {

	/**
	 * Gets the file content as string.
	 *
	 * @param file
	 *            the file
	 * @param encoding
	 *            the encoding
	 * @return the file content as string
	 * @throws Exception
	 *             the exception
	 */
	static public String getFileContenntAsString(File file, String encoding) throws Exception {
		FileInputStream is = new FileInputStream(file);
		return getStreamContentAsString(is);
	}

	/**
	 * Gets the file content as string.
	 *
	 * @param file
	 *            the file
	 * @return the file contennt as string
	 * @throws Exception
	 *             the exception
	 */
	static public String getFileContenntAsString(File file) throws Exception {
		FileInputStream is = new FileInputStream(file);
		String s = new String(getStreamContentAsBytes(is));
		return s;
	}

	/**
	 * Gets the file content as string.
	 *
	 * @param fileName
	 *            the file name
	 * @param encoding
	 *            the encoding
	 * @return the file content as string
	 * @throws Exception
	 *             the exception
	 */
	static public String getFileContenntAsString(String fileName, String encoding) throws Exception {
		FileInputStream is = new FileInputStream(fileName);

		// String s = new String(getStreamContentAsBytes(is), encoding);
		return getStreamContentAsString(is);
	}

	/**
	 * Gets the file content as string.
	 *
	 * @param fileName
	 *            the file name
	 * @return the file content as string
	 * @throws Exception
	 *             the exception
	 */
	static public String getFileContenntAsString(String fileName) throws Exception {
		FileInputStream is = new FileInputStream(fileName);
		return new String(getStreamContentAsBytes(is));
	}

	/**
	 * Gets the file content as bytes.
	 *
	 * @param fileName
	 *            the file name
	 * @return the file content as bytes
	 * @throws Exception
	 *             the exception
	 */
	static public byte[] getFileContentAsBytes(String fileName) throws Exception {
		FileInputStream is = new FileInputStream(fileName);
		return getStreamContentAsBytes(is);
	}

	/**
	 * Gets the stream content as string.
	 *
	 * @param is
	 *            the is
	 * @return the stream content as string
	 */
	public static String getStreamContentAsString(InputStream is) {
		try {
			byte buf[] = new byte[is.available()];
			is.read(buf);
			String s = new String(buf);
			return s;
			// return new String(buf, "UTF-8");
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * Gets the stream content as bytes.
	 *
	 * @param is
	 *            the is
	 * @return the stream content as bytes
	 * @throws Exception
	 *             the exception
	 */
	static public byte[] getStreamContentAsBytes(InputStream is) throws Exception {

		byte[] data = new byte[is.available()];
		if (is.available() == 0) {
			return data;
		}

		is.read(data);
		return data;
	}
	
	
	public static boolean writeToFile(String content, File f)throws Exception{
		FileOutputStream fout = new FileOutputStream(f);
		fout.write(content.getBytes());
		fout.flush();
		fout.close();
		return true;
	}

}
