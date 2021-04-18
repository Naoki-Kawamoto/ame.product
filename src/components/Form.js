const Form = () =>{
    return(
      <table>
          <tr>
            <th>お名前</th>
              <td colspan="2"><input type="text" id="your-name" placeholder="お名前" value="" /> 様</td>
          </tr>

          <tr>
            <th>お名前（フリガナ）</th>
              <td colspan="2"><input type="text" id="your-name_kana" placeholder="カナ" value="" /> 様</td>
          </tr>

          <tr>
            <th>年齢</th>
              <td colspan="2"><input type="number" id="you-age" placeholder="年齢" value="" max="120" /> 歳</td>
          </tr>
          <tr>
            <th>性別</th>
              <td><label><input type="radio" id="your-sex" value="男性" />男性</label><label><input type="radio" id="your-sex" value="女性" />女性</label></td>
          </tr>

          <tr>
            <th>身長</th>
              <td colspan="2"><input type="number" step="0.1" id="your-height" placeholder="身長" value="" /> cm</td>
          </tr>

          <tr>
            <th>体重</th>
              <td colspan="2"><input type="number" step="0.01" id="your-weight" placeholder="体重" value="" /> kg</td>
          </tr>

          <tr>
            <th>BMI</th>
              <td colspan="2"><input type="number" id="BMI" value="" placeholder="BMI" /></td>
          </tr>

          <tr>
            <th>腹囲</th>
              <td colspan="2"><input type="number" id="waist" placeholder="腹囲" step="0.1" value="" /> cm</td>
          </tr>

          <tr>
            <th>心拍数</th>
              <td colspan="2"><input type="number" id="heart_rate" placeholder="心拍数" step="1" value="" /> 回/1分</td>
          </tr>

          <tr>
            <th>脈拍</th>
              <td colspan="2"><input type="number" id="pusle" placeholder="脈拍" step="1" value="" /> 回/1分</td>
          </tr>

          <tr>
            <th>呼吸数</th>
              <td colspan="2"><input type="number" id="respiratory_rate" placeholder="呼吸数" step="1" value="" /> 回/1分</td>
          </tr>

          <tr>
            <th>SPO2</th>
              <td colspan="2"><input type="number" id="SPO2" placeholder="SPO2" step="0.1" value="" /> %</td>
          </tr>

          <tr>
            <th>血圧</th>
              <td>最高（平均値）<input type="number" id="blood-pressure-max" placeholder="最高血圧（平均値）" value="" /> mmHg</td>
              <td>最低（平均値）<input type="number" id="blood-pressure-min" placeholder="最低血圧（平均値）" value="" /> mmHg</td>
          </tr>
          <tr>
            <th>視力（裸眼）</th>
                <td>裸眼 右<input type="number" id="eye-right" placeholder="裸眼 右" step="0.01" value="" max="2" /></td>
                <td>裸眼 左<input type="number" id="eye-left" placeholder="裸眼 左" step="0.01" value="" max="2" /></td>
          </tr>

          <tr>
            <th>視力（矯正）</th>
                <td>矯正 右<input type="number" id="eye-right2" placeholder="矯正 右" step="0.01" value="" max="2" /></td>
                <td>矯正 左<input type="number" id="eye-left2" placeholder="矯正 左" step="0.01" value="" max="2" /></td>
          </tr>

          <tr>
            <th>眼底</th>
              <td>眼底KW<select id="eye-kw" value="" /><option value="0">0</option><option value="I">I</option><option value="II">II</option><option value="III">III</option><option value="IV">IV</option></td>
              <td>眼底H<select id="eye-kw" value="" /><option value="0">0</option><option value="I">I</option><option value="II">II</option><option value="III">III</option><option value="IV">IV</option></td>
              <td>眼底S<select id="eye-kw" value="" /><option value="0">0</option><option value="I">I</option><option value="II">II</option><option value="III">III</option><option value="IV">IV</option></td>
          </tr>

          <tr>
            <th>聴力①</th>
              <td>聴力1000Hz 右<select id="hearing-1000-right"  ><option value="異常なし">異常なし</option><option value="異常あり">異常あり</option></select></td>
              <td>聴力1000Hz 左<select id="hearing-1000-left"  ><option value="異常なし">異常なし</option><option value="異常あり">異常あり</option></select></td>
          </tr>

          <tr>
            <th>聴力②</th>
              <td>聴力4000Hz 右<select id="hearing-4000-right"  ><option value="異常なし">異常なし</option><option value="異常あり">異常あり</option></select></td>
              <td>聴力4000Hz 左<select id="hearing-4000-left"  ><option value="異常なし">異常なし</option><option value="異常あり">異常あり</option></select></td>
          </tr>

          <tr>
            <th>肺活量</th>
              <td>努力肺活量<input type="number" id="effort-lung-capacity" placeholder="努力肺活量" step="0.01" value="" / > l</td>
              <td>1秒量<input type="number" id="minite-lung-capacity" placeholder="1秒量" step="0.01" value="" / > l</td>
              <td>1秒率<input type="number" id="minute-lung-rate" placeholder="1秒率" step="0.01" value="" / > %</td>
          </tr>

          <tr>
            <th>肝機能①</th>
              <td>AST(GOT)<input type="number" id="AST" placeholder="AST(GOT)" step="1" value="" /> IU/L</td>
              <td>ALT(GOT)<input type="number" id="ALT" placeholder="ALT(GOT)" step="1" value="" /> IU/L</td>
          </tr>

          <tr>
            <th>肝機能②</th>
              <td>ALP<input type="number" id="ALP" placeholder="ALP" step="1" value="" /> U/L</td>
              <td>γ-GT<input type="number" id="γ-GT" placeholder="γ-GT" step="1" value="" /> IU/L</td>
          </tr>

          <tr>
            <th>総蛋白</th>
              <td><input type="number" id="total-protein" placeholder="総蛋白" step="0.1" value="" /> g/dl</td>
          </tr>

          <tr>
            <th>アルブミン</th>
              <td><input type="number" id="albumin" placeholder="アルブミン" step="0.1" value="" /> g/dl</td>
          </tr>

          <tr>
            <th>LD</th>
              <td><input type="number" id="LD" placeholder="LD" step="1" value="" /> IU/L</td>
          </tr>

          <tr>
            <th>総ビリルビン</th>
              <td><input type="number" id="total-bil" placeholder="総ビリルビン" step="0.1" value="" max="3" />mg/dl</td>
          </tr>

          <tr>
            <th>血清アミラーゼ</th>
              <td><input type="number" id="serum-amylase" placeholder="血清アミラーゼ" step="1" value="" /> IU/L</td>
          </tr>

          <tr>
            <th>コレステロール</th>
              <td>総コレステロール<input type="number" id="total-cholesterol" placeholder="総コレステロール" value="" /> mg/dl</td>
              <td>LDLコレステロール<input type="number" id="LDL-cholesterol" placeholder="LDLコレステロール" value="" /> mg/dl</td>
              <td>HDLコレステロール<input type="number" id="HDL-cholesterol" placeholder="HDLコレステロール" value="" /> mg/dl</td>
          </tr>

          <tr>
            <th>中性脂肪</th>
              <td><input type="number" id="neutral-fat" placeholder="中性脂肪" value="" /> mg/dl</td>
          </tr>

          <tr>
            <th>糖代謝</th>
              <td>空腹時血糖<input type="number" id="bs-fasting" placeholder="空腹時血糖" value="" /> mg/dl</td>
              <td>HbA1c<input type="number" id="HbA1c" placeholder="HbA1c" step="0.1" value="" /> %</td>
          </tr>

          <tr>
            <th>尿酸</th>
              <td><input type="number" id="uric-acid" placeholder="尿酸" step="0.1" value="" /> mg/dl</td>
          </tr>

          <tr>
            <th>便潜血</th>
              <td>便潜血1回目<select id="occult-blood-1" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
              <td>便潜血2回目<select id="occult-blood-2" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
          </tr>

          <tr>
            <th>クレアチニン</th>
              <td><input type="number" id="creatinine" placeholder="クレアチニン" step="0.01" value="" /> mg/dl</td>
          </tr>

          <tr>
            <th>eGFR</th>
              <td><input type="number" id="eGFR" placeholder="eGR" step="0.01" value="" /> ml</td>
          </tr>

          <tr>
            <th>尿</th>
              <td>尿蛋白<select id="urinary-protein" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
              <td>尿潜血<select id="urinary-blood" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
              <td>尿糖<select id="urinary-sugar" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
          </tr>

          <tr>
            <th>沈渣①</th>
              <td>白血球<input type="number" id="white-blood-cell" placeholder="白血球" value="" /> /数視野</td>
              <td>赤血球<input type="number" id="red-blood-cell" placeholder="赤血球" value="" /> /数視野</td>
              <td>扁平上皮<input type="number" id="flat-epithelium" placeholder="扁平上皮" value="" /></td>
          </tr>

          <tr>
            <th>沈渣②</th>
              <td>細菌<input type="text" id="germ" placeholder="細菌" value="" /></td>
              <td>その他<input type="text" id="other" placeholder="その他" value="" /></td>
          </tr>

          <tr>
            <th>血球数</th>
              <td>白血球数<input type="number" id="number-white-blood-cell" placeholder="白血球数" value="" /> 10<sup>2</sup>/μl</td>
              <td>赤血球数<input type="number" id="number-red-blood-cell" placeholder="赤血球数" value="" />10<sup>4</sup>/μl</td>
          </tr>

          <tr>
            <th>血色素量</th>
              <td><input type="number" id="hemoglobinopathy" placeholder="血色素量" step="0.1" value="" /> g/dl</td>
          </tr>

          <tr>
            <th>ヘマトクリット</th>
              <td><input type="number" id="hematocrit" placeholder="ヘマトクリット" step="0.1" value="" /> %</td>
          </tr>

          <tr>
            <th>血小板数</th>
              <td><input type="number" id="number-platelet" placeholder="血小板数" step="0.1" value="" />10<sup>4</sup>/μl</td>
          </tr>

          <tr>
            <th>好塩基球(BASO)</th>
              <td><input type="number" id="BASO" placeholder="好塩基球(BASO)" step="0.1" value="" /> %</td>
          </tr>

          <tr>
            <th>好酸球(EOS)</th>
              <td><input type="number" id="EOS" placeholder="好酸球(EOS)" step="0.1" value="" /> %</td>
          </tr>

          <tr>
            <th>好中球(NEUT)</th>
              <td><input type="number" id="NEUT" placeholder="好中球(NEUT)" step="0.1" value="" /> %</td>
          </tr>

          <tr>
            <th>リンパ球(LYMPO)</th>
              <td><input type="number" id="LYMPO" placeholder="リンパ球(LYMPO)" step="0.1" value="" /> %</td>
          </tr>

          <tr>
            <th>単球(MONO)</th>
              <td><input type="number" id="MONO" placeholder="単球(MONO)" step="0.1" value="" /> %</td>
          </tr>

          <tr>
            <th>HBs抗原</th>
              <td><select id="HBs" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
          </tr>

          <tr>
            <th>HCV</th>
              <td>HCV抗体<select id="HCV" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
              <td>HCV抗体（協）<select id="HCV-2" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
          </tr>

          <tr>
            <th>梅毒</th>
              <td>梅毒 RPR法<select id="syphilis-RPR" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
              <td>梅毒 TPHA法<select id="syphilis-TPHA" ><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
          </tr>

          <tr>
            <th>心電図</th>
              <td colspan="2"><input type="text" id="ECG" placeholder="心電図コメント" value="" /></td>
          </tr>

          <tr>
            <th>子宮頸部細胞診</th>
              <td><select id="cervical-cytology"><option value="(-)">(-)</option><option value="陽性">陽性</option></select></td>
          </tr>
      </table>
    );
};

export default Form;
